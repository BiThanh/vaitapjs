using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PntBaiDanhGiaGiuaKy.Models
{
    public class PntStudent
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Tên sản phẩm không được để trống")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "Tên sản phẩm từ 5-100 ký tự")]
        public string Name { get; set; }
        public string Image { get; set; }
        [Required(ErrorMessage = "Số lượng không được để trống")]
        [Range(1, 100, ErrorMessage = "Số lượng từ 1-100")]
        public int Quantity { get; set; }
        [Required(ErrorMessage = "Giá sản phẩm không được để trống")]
        [Range(0.01, double.MaxValue, ErrorMessage = "Giá sản phẩm lớn hơn 0")]
        public int Price { get; set; }
        public bool IsActive { get; set; }  
    }
}