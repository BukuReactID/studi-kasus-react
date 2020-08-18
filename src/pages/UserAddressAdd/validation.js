const rules = {
  nama_alamat: {
    required: { value: true, message: 'Nama alamat tidak boleh kosong.'}, 
    maxLength: { value: 500, message: 'Panjang nama alamat maksimal 500 karakter'},
    minLength: { value: 5, message: 'Panjang nama alamat minimal 5 karakter'}
  },
  provinsi: {
    required: { value: true, message: 'Provinsi harus dipilih.'}
  },
  kabupaten: {
    required: { value: true, message: 'Kabupaten harus dipilih.'}
  }, 
  kecamatan: {
    required: { value: true, message: 'Kecamatan harus dipilih.'}
  }, 
  kelurahan: {
    required: { value: true, message: 'Kelurahan harus dipilih.'}
  },
  detail_alamat: {
    required: { value: true, message: 'Detail alamat harus diisi'},
    maxLength: { value: 1000, message: 'Panjang detail alamat maksimal 1000 karakter'}
  }
}


export { rules };
