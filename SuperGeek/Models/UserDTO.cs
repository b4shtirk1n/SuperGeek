using System.ComponentModel.DataAnnotations;

namespace SuperGeek.Models
{
    public class UserDTO
    {
        [Required]
        [EmailAddress]
        [StringLength(50)]
        public string Email { get; set; } = null!;

        [Required]
        [Phone]
        public string Phone { get; set; } = null!;

        [Required]
        [StringLength(20)]
        public string FirstName { get; set; } = null!;

        [Required]
        [StringLength(20)]
        public string LastName { get; set; } = null!;

        [StringLength(20)]
        public string? Patronymic { get; set; } = null!;
    }
}
