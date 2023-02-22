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

# Untuk menjalankan classnya, lakukan perintah berikut
if __name__ == '__main__':
    data = {
        # nama database yang akan disambungkan
        "database" : "ini_nama_database",
        # nama collection yang akan disambungkan
        "collection" : "ini_nama_collection",
    }

    mongo_objek = MongoCRUD(data, koneksi_url)
    read_data = mongo_objek.read()
    print(read_data)

