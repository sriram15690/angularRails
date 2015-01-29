class Contact < ActiveRecord::Base
  #attr_accessible :city, :membership, :mobile_num, :name,:email, :status
  
  validates :mobile_num, uniqueness: true
  
end
