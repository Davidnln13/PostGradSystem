from database_manager import DatabaseManager

class UserManager:
	def __init__(self):
		print("UserManager: __init__")
		self.database_manager = DatabaseManager()

	def signin(self, message_data):
		"""Returns message type : string"""
		result = False
		message_type = "signin_failed"

		try:
			result = self.database_manager.check_password(message_data["email"],message_data["password"])
		except:
			message_type = "signin_failed"

		if result is True:
			message_type="signin_successful"
			self.database_manager.get_user_info(message_data)

		print("message_type:", message_type)

		return message_type

	def signup(self, message_data):
		"""Returns message type : string"""
		try:
			self.database_manager.insert_into_table("Users", message_data)
			message_type = "signup_successful"
		except:
			message_type = "signup_failed"

		print("message_data:",message_data, "message_type:", message_type)

		return message_type

	def redpage(self,message_data):
		""""Returns message type : string"""

		try:
			self.database_manager.insert_into_table("SavedMessages", message_data)
			message_type = "redpage"
		except:
			message_type = "redpage"

		print("message_data:", message_data, "message_type:", message_type)

		return message_type
