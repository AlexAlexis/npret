class CreateReturns < ActiveRecord::Migration[5.1]
  def up
    create_table :returns do |t|
      t.string :consignmentNote      
      t.integer :telephoneNumber     
      t.integer :cashback      
      t.string :city
      t.string :test2

      t.timestamps
    end
  end
  def down
  	drop_table :returns
  end

end
