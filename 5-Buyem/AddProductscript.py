import sqlite3 as db

#Please place this .py file in buyem project folder where manage.py file is present

path = 'path_to_your_project_folder/buyem'
#Please add the path where your project folder or manage.py file is present


conn = db.connect(path+'/db.sqlite3')
print(conn)
cr = conn.cursor()

cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(1,'Pen','product/default.png','It is used to write.',10,'pen,tool',5)")
cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(2,'pencil','product/default.png','It is used to write.',5,'pencil,tool',10)")
cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(3,'Guns','product/43.jpg','It is used for defense.',1000,'gun,guns,armor,defense',15)")
cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(4,'Music album','product/adele.png','It is a music album.',500,'music,entertainment',8)")
cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(5,'Seat cover','product/5.jpg','It is used to cover the seats.',800,'cover,seat',3)")
cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(6,'Samsung phone','product/default.png','It is used to call, message, click pictures.',15000,'mobile,electronic,electronics,phone',6)")
cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(7,'JBL Earphone','product/default.png','It is used to listen music.',400,'electronic,earphone,',7)")
cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(8,'Washing machine','product/default.png','It is used to wash clothes.',50000,'wash,machine,electronics',3)")
cr.execute("insert into shop_product(id,name, product_pic,description,cost,category,no_of_item) values(9,'Eraser','product/default.png','It is used to erase.',3,'erase,tool',18)")

# cr.execute('delete from shop_product')

conn.commit()
cr.execute("select * from shop_product")
print(cr.fetchall())
# print(cr.fetchone())
# conn.commit()
conn.close()	
