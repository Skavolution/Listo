namespace ListoBackend.ModelsView
{
    public class ClientesLoginMV
    {
        public long CedulaCli { get; set; }
        public string NomCli { get; set; } = null!;
        public long CelCli { get; set; }
        public long TelfijCli { get; set; }
        public string EmailCli { get; set; } = null!;
        public string DirCli { get; set; } = null!;
        public string Ciudad { get; set; } = null!;
        public string ContraseñaCli { get; set; } = null!;
    }
}
