using System;
using System.Collections.Generic;

namespace ListoBackend.Models
{
    public partial class Empleado
    {
        public Empleado()
        {
        }

        public int IdEmp { get; set; }
        public string NomEmp { get; set; } = null!;
        public string CargoEmp { get; set; } = null!;
        public long? CelEmp { get; set; }
        public int IdRest { get; set; }


    }
}
