# Panduan Android saja — biaya Rp0

## A. Buat Google Sheet sebagai panel admin
1. Buka aplikasi Google Sheets atau `sheets.google.com` di Chrome Android.
2. Buat spreadsheet bernama `PH — Team Control Center`.
3. Buat tiga tab dengan nama PERSIS: `PLAYERS`, `MATCHES`, `GALLERY`.
4. Isi baris pertama sesuai template CSV yang ada di paket:
   - PLAYERS: nickname | role | status | photoUrl | tagline
   - MATCHES: date | opponent | event | result | score | status
   - GALLERY: imageUrl | caption | status
5. Tambahkan contoh data di baris 2. Status `HIDDEN` menyembunyikan entri dari website; selain itu akan tampil.
6. Jangan masukkan data pribadi atau data pendaftar ke tab publik. Batasi izin edit spreadsheet hanya untuk admin.

## B. Pasang endpoint data Apps Script
1. Dari spreadsheet, buka Chrome > menu ⋮ > centang `Situs desktop` jika menu Extensions tidak terlihat.
2. Pilih Extensions > Apps Script.
3. Hapus kode contoh, lalu tempel seluruh isi `Code.gs` dari paket ini.
4. Klik Save dan beri nama project `PH Public Website API`.
5. Klik Deploy > New deployment > pilih jenis `Web app`.
6. Execute as: `Me`. Who has access: `Anyone` jika pilihan ini tersedia di akunmu.
7. Klik Deploy, setujui izin Google, lalu salin URL Web app yang berakhir `/exec`.
8. Endpoint ini hanya membaca tiga tab publik. Jangan menambahkan fungsi penulisan atau data privat ke endpoint publik.
9. Jika pilihan Anyone tidak tersedia karena kebijakan akun, jangan mengubah spreadsheet menjadi publik tanpa memahami risikonya. Berhenti dan gunakan metode publikasi data yang disetujui akun.

## C. Hubungkan website
1. Buka `index.html` dengan editor teks yang bisa mengedit file di HP, atau edit setelah diunggah ke GitHub.
2. Cari `PASTE_APPS_SCRIPT_WEB_APP_URL_HERE`, ganti dengan URL `/exec` tadi.
3. Ganti `PASTE_GOOGLE_FORM_URL_HERE` dengan link Google Form recruitment.
4. Ganti `628XXXXXXXXXX` dengan nomor WhatsApp resmi dalam format internasional, angka saja. Contoh format Indonesia: 62812xxxx.
5. Simpan file.

## D. Buat formulir recruitment
1. Buka `forms.google.com` dan buat form `PRYTANEIS HEAVENLY — Player Recruitment`.
2. Tambahkan pertanyaan: nama panggilan (opsional), nickname MLBB, role utama, role kedua, rank, pengalaman tim/turnamen, jam latihan, kontak Discord/WhatsApp (opsional).
3. Jangan meminta password, OTP, atau data sensitif.
4. Di Responses, hubungkan ke spreadsheet respons. Batasi akses respons hanya admin.
5. Salin link Form dan pasang ke konfigurasi website pada langkah C.

## E. Terbitkan ke GitHub Pages dari HP
1. Buat/masuk akun di `github.com`.
2. Buat repository baru bernama `prytaneis-heavenly`, pilih Public, dan centang Add a README.
3. Buka repository > Add file > Upload files.
4. Upload `index.html` dari paket. Commit changes.
5. Buka Settings > Pages.
6. Pada Build and deployment pilih `Deploy from a branch`.
7. Branch pilih `main`, folder pilih `/(root)`, lalu Save.
8. Tunggu proses deploy. Link biasanya berbentuk `https://USERNAME.github.io/prytaneis-heavenly/`.
9. Periksa tab Actions atau Settings > Pages jika belum tayang. GitHub menyebut proses publikasi dapat memerlukan hingga sekitar 10 menit.

## F. Cara admin memperbarui website
- Tambah/edit pemain: buka tab PLAYERS di Google Sheets.
- Jadwal/hasil: tab MATCHES.
- Foto: upload gambar ke layanan hosting gambar yang memberi URL publik, lalu tempel URL gambar di kolom photoUrl atau imageUrl. Pastikan URL benar-benar dapat dibuka publik.
- Sembunyikan entri: ubah status menjadi `HIDDEN`.
- Recruitment: periksa respons Google Forms, jangan bagikan sheet respons ke publik.
- Perubahan data tampil saat website dimuat ulang. Apps Script/Google Sheets memiliki kuota dan layanan dapat berubah.

## Catatan penggunaan Android
Chrome Android bisa menampilkan GitHub versi mobile; jika menu tertentu tidak muncul, gunakan ⋮ > Situs desktop. File ZIP perlu diekstrak melalui aplikasi Files/Files by Google. Tidak perlu Termux atau laptop untuk alur dasar ini.
