namespace BarApi.Controllers
{
    using System.Collections.Generic;
    using Contracts;
    using Interfaces;
    using Microsoft.AspNetCore.Mvc;


    [Route("api/bar")]
    [ApiController]
    public class BarController : ControllerBase
    {
        private readonly IBarService _barService;

        public BarController(IBarService barService)
        {
            _barService = barService;
        }

        [HttpGet]
        public List<Bar> GetBars()
        {
            return _barService.GetBars();
        }
    }
}
