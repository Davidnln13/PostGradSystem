import time
import traceback

from mysql.connector.pooling import MySQLConnectionPool
from mysql.connector import errorcode


class DatabaseManager:

	def __init__(self):
		print("DatabaseManager: __init__")
		self.createConnectionPool()

	def createConnectionPool(self):
		dbconfig = {
		"user": "root",
		"password":"xboxorpc7",
		"host":'mysql', #set host to mysql using docker run link
		"database":'ProjectOrganiser',
		"port":'3306'
		}

		try:
			self.cnxpool = MySQLConnectionPool(
				pool_name = "mypool",
				pool_size = 32,
				**dbconfig)
		except:
			# sleep - hopefully will help - might be that the MySQL
			#container is not up and running yet
			print("Exception... sleeping for 5 seconds then retry")
			tb = traceback.format_exc()
			print("tb: " + tb)
			time.sleep(5)
			# try again
			return self.createConnectionPool()

	def insert_into_table(self, table_name, my_dict):
		connector = self.cnxpool.get_connection()
		cursor = connector.cursor(dictionary=True)

		columns = ', '.join(my_dict.keys())
		placeholders = ", ".join(["%s"] * len(my_dict))

		stmt = "INSERT INTO `{table}` ({columns}) VALUES ({values});".format(
			table=table_name,
			columns=",".join(my_dict.keys()),
			values=placeholders
		)

		cursor.execute(stmt, list(my_dict.values()))

		connector.commit()
		cursor.close()
		connector.close()


	def delete_user(self, email):
		#Inserts a dictionary into table table_name
		print("delete user")
		connector = self.cnxpool.get_connection()
		cursor = connector.cursor(dictionary=True)

		stmt = ("DELETE * FROM Users WHERE Users.email='"+email+"'")
		print("stmt:")
		print(stmt)

		cursor.execute(stmt)

		connector.commit()
		cursor.close()
		connector.close()

	def check_password(self, email, password):
		#return true if successful
		print("check_password")
		result = False

		connector = self.cnxpool.get_connection()
		cursor = connector.cursor(dictionary=True)

		query = ("SELECT * FROM Users WHERE Users.email='"+email+"' AND Users.password='"+password+"'")
		print("query:")
		print(query)

		cursor.execute(query)
		cursor.fetchall()

		if cursor.rowcount == 1:
			result = True

		cursor.close()
		connector.close()

		return result

	def get_user_info(self, message_data):
		print ("get_user_data")
		email = message_data["email"]

		connector = self.cnxpool.get_connection()
		cursor = connector.cursor(dictionary=True)
		query = ("SELECT * FROM Users WHERE Users.email='"+email+"'")

		print(query)

		cursor.execute(query)
		data = cursor.fetchall()

		print ("Cursor : ", data)

		message_data["role"] = data[0]["role"]
		message_data["name"] = data[0]["name"]
		message_data["surname"] = data[0]["surname"]

		cursor.close()
		connector.close()