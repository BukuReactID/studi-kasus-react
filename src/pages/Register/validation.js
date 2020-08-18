const rules = {
  full_name: {
      required: { value: true, message: 'Nama lengkap harus diisi.'}, 
      maxLength: { value: 500, message: 'Panjang nama lengkap maksimal 500 karakter.'}
    },

  email: {
      required: { value: true, message: 'Email harus diisi.'}, 
      maxLength: { value: 255, message: 'Panjang email maksimal 255 karakter.'}, 
      pattern: {value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, message: 'Email tidak valid'},
    },

  password: {
      required: { value: true, message: 'Password harus diisi.'}, 
      maxLength: { value: 255, message: 'Panjang password maksimal 255 karakter.'}
    },

  password_confirmation: {
      required: { value: true, message: 'Konfirmasi password harus diisi.'},
    }
}

export { rules }
