namespace BarApi.Tests.IntegrationTests
{
    using Xunit;

    public class BarControllerTests : IClassFixture<BarControllerFixture>
    {
        private readonly BarControllerFixture _fixture;

        public BarControllerTests(BarControllerFixture fixture)
        {
            _fixture = fixture;
        }

        [Fact]
        public void GettingGivesCorrectNumberOfBars()
        {
            var data = _fixture.Controller.GetBars();

            Assert.Equal(3, data.Count);
        }

        [Theory]
        [InlineData(0, "A", "RED", 50)]
        [InlineData(1, "B", "BLUE", 100)]
        [InlineData(2, "C", "GREEN", 75)]
        public void BarsHaveCorrectInfo(int pos, string name, string color, decimal value)
        {
            var data = _fixture.Controller.GetBars()[pos];

            Assert.Equal(name, data.Name);
            Assert.Equal(color, data.Color);
            Assert.Equal(value, data.Value);
        }
    }
}
