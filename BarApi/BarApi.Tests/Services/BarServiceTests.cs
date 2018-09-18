namespace BarApi.Tests.Services
{
    using Xunit;
    public class BarServiceTests : IClassFixture<BarServiceFixture>
    {
        private readonly BarServiceFixture _fixture;

        public BarServiceTests(BarServiceFixture fixture)
        {
            _fixture = fixture;
        }

        [Fact]
        public void GettingBarsGivesCorrectNumberOfBars()
        {
            var data = _fixture.Service.GetBars();

            Assert.Equal(3, data.Count);
        }

        [Theory]
        [InlineData(0, "A", "RED", 50)]
        [InlineData(1, "B", "BLUE", 100)]
        [InlineData(2, "C", "GREEN", 75)]
        public void BarsHaveCorrectInfo(int pos, string name, string color, decimal value)
        {
            var data = _fixture.Service.GetBars()[pos];

            Assert.Equal(name, data.Name);
            Assert.Equal(color, data.Color);
            Assert.Equal(value, data.Value);
        }
    }
}
