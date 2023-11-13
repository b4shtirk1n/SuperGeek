using System.ComponentModel.DataAnnotations;

namespace SuperGeek.Models
{
    public class UserDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        public string Phone { get; set; } = null!;

        [Required]
        [MaxLength(20)]
        public string FirstName { get; set; } = null!;

        [Required]
        [MaxLength(20)]
        public string LastName { get; set; } = null!;

        [Required]
        [MaxLength(20)]
        public string Patronymic { get; set; } = null!;
    }
}
