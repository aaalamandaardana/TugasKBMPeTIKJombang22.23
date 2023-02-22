# Lakukan proses import pada file app.py
import pymongo

# buat config untuk menghubungkan database mongodb dengan app.py melalui pembuatan koneksi url mongo
koneksi_url = "mongodb://localhost:27017/"

# Kemudian lakukan proses debug untuk mengecek apakah proses koneksi ke mongodb berhasil dan tidak mengalami error
def cekKoneksi():
    client = pymongo.MongoClient(koneksi_url)
    try:
        cek = client.list_database_names()
        print(cek)
    except:
        print('database error')

# Memanggil cek koneksi dengan perintah berikut
# cekKoneksi()

# Membuat database baru 
def createDatabase():
    myclient = pymongo.MongoClient(koneksi_url)
    mydatabase = myclient['ini_nama_database']
    mycollection = mydatabase['ini_nama_collection']
    mydocument = mycollection.insert_one({ 'nama' : 'fulan'})

    return mydocument

# Memanggil pembuatan database baru dengan perintah berikut 
# createDatabase()

# buat class MongoCRUD dan lakukan proses init/inisialisasi pada class tersebut
class MongoCRUD:
    def __init__(self, data, koneksi):
        self.client = pymongo.MongoClient(koneksi)
        database = data['database']
        collection = data['collection']
        cursor = self.client[database]
        self.collection = cursor[collection]
        self.data = data
    
    # Didalam class MongoCRUD, buatlah function untuk read data 
    def read(self):
        documents = self.collection.find()
        value = [{
            item: data[item] for item in data if item != '_id'}
            for data in documents
        ]
        return value

    # Pada fungsi create, kita akan menerima dua parameter :
    # 1. Self (superclass) adalah parameter bawaan dari class
    # 2. Data adalah data pada document yang akan di tambahkan/buat.
    def create(self, data):
        new_document = data['document']
        response = self.collection.insert_one(new_document)
        value = {
            'status' : 'berhasil',
            'document_id' : str(response.inserted_id)
        }
        return value
    
    # Pada bagian self data, kalian harus memasukkan dataAwal dan dataUpdate untuk melakukan update data pada mongodb.
    def update(self):
        data_awal = self.data['dataAwal']
        update_data = {
            "$set": self.data['dataUpdate']
        }
        response = self.collection.update_one(data_awal, update_data)
        value = {
            "status": "berhasil diupdate" if response.modified_count > 0 
            else "Tidak ada data yang perlu diupdate"
        }
        return value
    
    # function delete untuk menghapus data didalam class MongoCRUD 
    def delete(self, data):
        dataHapus = data['document']
        response = self.collection.delete_one(dataHapus)
        value = {
            'status' : 'berhasil dihapus' if response.deleted_count > 0
            else "document tidak ditemukan"
        }
        return value

# Untuk menjalankan classnya, lakukan perintah berikut
if __name__ == '__main__':
    data = {
        # nama database yang akan disambungkan
        "database" : "ini_nama_database",
        # nama collection yang akan disambungkan
        "collection" : "ini_nama_collection",

        # Optional untuk update data
        # "dataAwal" : {
        #     'nama' : "RRQ Lemon"
        # },

        # Optional untuk update data
        # "dataUpdate" : {
        #     'nama' : "Fulan"
        # }
    }
    mongo_objek = MongoCRUD(data, koneksi_url)
    
    # ------------------------------------------------

    # Menjalankan fungsi update dengan perintah berikut
    # mongo_objek = MongoCRUD(data, koneksi_url)
    # mongo_objek.update()

    # ------------------------------------------------

    # Menjalankan fungsi create dengan perintah berikut
    # mongo_objek.create({
    #     'document' : {
    #         'name' : 'Jongkok'
    #     }
    # })

    # ------------------------------------------------

    # Menjalankan fungsi delete dengan perintah berikut
    # data_delete = {
    #     'document' : {
    #         'name' : 'Jongkok'
    #     }
    # }
    # mongo_objek.delete(data_delete)

    # ------------------------------------------------

    # Baca Data Lagi
    read_data = mongo_objek.read()
    print(read_data)
    



