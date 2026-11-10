# PRYTANEIS HEAVENLY — Zero-budget Android setup

## Isi paket
- `index.html`: website publik responsif, tema black/neon purple.
- `Code.gs`: endpoint baca-saja untuk mengambil data publik dari Google Sheets.
- `PLAYERS.csv`, `MATCHES.csv`, `GALLERY.csv`: header/template data.
- `SETUP-ANDROID.md`: panduan setup dari HP.

## Keamanan & batasan
- GitHub Pages hanya meng-host file statis. Ia tidak menjalankan database atau PHP/backend.
- Google Sheets menjadi panel admin privat. Beri akses edit hanya kepada admin tepercaya.
- Apps Script hanya membaca kolom publik dan tidak menyediakan endpoint untuk mengubah data.
- Jangan masukkan nomor telepon pribadi, password, email pribadi, ID akun sensitif, atau data pendaftar ke tab publik.
- Recruitment memakai Google Forms; respons disimpan privat di Google Forms/Sheets.
- Paket ini tidak menyimpan password admin dalam HTML. Hindari sistem login palsu yang menaruh password di JavaScript.
- Layanan gratis memiliki kuota dan kebijakan yang dapat berubah. Apps Script memiliki kuota harian.
