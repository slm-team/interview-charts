namespace BarApi.Tests.IntegrationTests
{
    using BarApi.Controllers;
    using BarApi.Services;

    public class BarControllerFixture
    {
        public BarController Controller { get; }

        public BarControllerFixture()
        {
            Controller = new BarController(new BarService());
        }
    }
}
