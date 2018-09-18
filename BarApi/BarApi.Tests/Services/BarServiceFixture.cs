namespace BarApi.Tests.Services
{
    using BarApi.Services;

    public class BarServiceFixture
    {
        public BarService Service { get; }

        public BarServiceFixture()
        {
            Service = new BarService();
        }
    }
}
