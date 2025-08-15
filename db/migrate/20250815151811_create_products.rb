class CreateProducts < ActiveRecord::Migration[8.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.decimal :public_price
      t.decimal :client_price

      t.timestamps
    end
  end
end
