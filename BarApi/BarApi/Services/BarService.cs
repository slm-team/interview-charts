namespace BarApi.Services
{
    using System.Collections.Generic;
    using Contracts;
    using Interfaces;

    public class BarService : IBarService
    {
        public List<Bar> GetBars()
        {
            return new List<Bar>
            {
                new Bar("A", "RED", 50),
                new Bar("B", "BLUE", 100),
                new Bar("C", "GREEN", 75)
            };
        }
    }
}