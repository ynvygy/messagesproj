class Message < ActiveRecord::Base
	validates :name, length: {minimum: 5}
	validates :email, presence: true, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/
	validates :message, length: {minimum: 3}
end
