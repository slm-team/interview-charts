namespace BarApi.Contracts
{
    public class Bar
    {
        public string Name { get; }
        public string Color { get; }
        public decimal Value { get; }

        public Bar(string name, string color, decimal value)
        {
            Name = name;
            Color = color;
            Value = value;
        }
    }
}