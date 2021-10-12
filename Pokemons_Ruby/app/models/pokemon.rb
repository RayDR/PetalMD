class Pokemon < ApplicationRecord
    validates :name, presence: true, length: {minimum:3}, :uniqueness => {:scope => :name}
    validates :generation, presence: true, numericality: true
    
    validates :total, numericality: true
    validates :hp, numericality: true
    validates :attack, numericality: true
    validates :defense, numericality: true
    validates :spatk, numericality: true
    validates :spdef, numericality: true
    validates :speed, numericality: true

    validates :legendary, numericality: true, length: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 1}, 
end
