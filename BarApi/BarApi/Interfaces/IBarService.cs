namespace BarApi.Interfaces
{
    using System.Collections.Generic;
    using Contracts;

    public interface IBarService
    {
        List<Bar> GetBars();
    }
}
