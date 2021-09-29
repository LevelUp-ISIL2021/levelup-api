# levelup-api
API for the LevelUp project

PASOS PARA CREAR LA BD EN MONGO
-------------------------------

PARA ABRIR CONEXION A MONGODB en el CMD con permisos de administrador corremos los sgtes. comandos
mongod
mongo
DAMOS ENTER EN mongod y en la ventana mongo debe estar recien conectado
------------------------------------------------------------------------------------------------------------------------
COMANDO PARA HACER CAMBIOS DESDE LA CONSOLA PERO CONECTADO AL ATLAS
mongo "mongodb+srv://cluster0.t8if7.mongodb.net/myfirstdb" --username root

---> la contraseña de conexión con el usuario root es "root"
------------------------------------------------------------------------------------------------------------------------
show dbs   --> COMANDO PARA VER LAS BD EXISTENTES
db  -->  COMANDO PARA VER EN QUE BD TE ENCUENTRAS
show collections  --> COMANDO PARA VER LAS COLECCIONES QUE TIENE LA BD
db.users.find()  --> PARA VER LOS DATOS INGRESADOS EN EL DOCUMENTO USER
db.reviews.find()  --> PARA VER LOS DATOS INGRESADOS EN EL DOCUMENTO USER

-----------------------------------------------------------------------------------------------------------------------

PARA BUSCAR LOS DATOS INGRESADOS
db.products.find().pretty()  ----> con esto vemos todos los datos creados
cls    --->   limpio la ventana de comandos
db.products.find({name:"mouse"})     ---->  con esto busco en la coleccion products el producto con el nombre "mouse"
db.products.find({"price":999.99}).pretty()   ---> busca en products el objeto con precio 999.99 y lo ordena con pretty
db.products.find({"tags":"computers", "name":"monitor"})   ---> busca el objeto con description comupter y nombre monitor
db.products.findOne({"tags":"computers"})   ---->   devuelve solo la primera linea del tags consultado
db.products.findOne({"tags":"computers"}, {"name":1, "description":1, "_id":0})   --> devuelve lo consultado sin el id pero con nombre y descripcion
db.products.findOne({"tags":"computers"}).sort({name:1})  ---> ordena con sort alfabeticamente
db.products.find().limit(2)   --->  devuelve solo 2 registros o documentos de todos los datos ingresados
db.products.count()   -->  devuelve la cuenta de los documentos ingresados en la coleccion products
db.products.find().forEach(product => print("Product Name " + product.name))   ---> recorre todos los documentos de name products y los imprime
db.products.find().forEach(product => print("Product Price " + product.price)) ---> recorre todos los precios de products

PARA ACTUALIZAR LOS REGISTROS INGRESADOS
db.products.update({"name":"keyboard"},{"price":99.99})  ---> reemplazara todo lo de la izquierda con todo lo de la derecha.. en este caso reemplaza el nombre keyboard con el precio 99.99
db.products.find()  ---> para consultar lo reemplazado
db.products.update({"price":99.99},{"name":"keyboard","price":99.9})  --> ESTA ES LA MEJOR FORMA DE REEMPLAZAR
db.products.find()
OTRA FORMA DE ACTUALIZAR PERO SOLO EL REGISTRO QUE SE DESEA
db.products.update({"name":"laptop"},{$set: {"description":"lg gram laptop"}})  ---> con esto le agrego descripcion al registro con nombre "laptop"
db.products.find()
db.products.update({"name":"desktop"},{$set:{"description":"Gaming Desktop"}}, {upsert:true}) --> Fuerza un nuevo producto desktop con el upsert y agrega una descripcion Gaming Desktop
PARA INCREMENTAR SOBRE UN DATO NUMERICO CON EL COMANDO INC
db.products.update({"name":"keyboard"}, {$inc: {"price":0.01}})
db.products.update({"name":laptop},{$inc:{"price":0.01}})
db.products.find()  --->  deberian los nuevos precios incrementados en 0.01
db.products.update({"name":"laptop"}, {$rename:{"name": "nombre"}})  ---> cambia el nombre del atributo "name" por "nombre"

PARA ELIMINAR UN REGISTRO
db.products.remove({"name":"keyboard"})
db.products.remove({})  ---->  ESTO ELIMINA TODOS LOS DOCUMENTOS QUE TENGA LA COLECCION
