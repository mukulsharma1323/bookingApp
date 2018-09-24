export interface Bookinglist {
	_id: { type: Number},
	 txn_id :  {type: Number} ,
	 from : {type: String} ,
	 to :  {type: String} ,
	 vehicle_type :  {type: String} ,
	 date :  {type: Date} ,
	 material :  {type: String} ,
	 transporters : {
		 id : {type: String} ,
		 _id :  {type: String} ,
		 available_vehicles : {type: Number},
		 price : {type: Number},
		 vehicle_details :  {type: String} ,
		 tp_response :  {type: String} 
	},
	 price : {
		 price_details :  {type: String} ,
		 value :  {type: Number} ,
		 _id :  {type: String} ,
		 user_response :  {type: String} 
	},
	 unloading : {
		 contact_number :  {type: Number} ,
		 address :  {type: String} 
	},
	 loading : {
		 contact_number : {type: Number} ,
		 address :  {type: String} 
	},
	 no_of_vehicle :  {type: Number}
}
