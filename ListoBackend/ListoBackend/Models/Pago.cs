using System;
using System.Collections.Generic;

namespace ListoBackend.Models
{
    public partial class Pago
    {
        public int IdPago { get; set; }
        public string DescPago { get; set; } = null!;
        public int IdOrd { get; set; }

    }
}
