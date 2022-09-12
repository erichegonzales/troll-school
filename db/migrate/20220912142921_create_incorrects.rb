class CreateIncorrects < ActiveRecord::Migration[7.0]
  def change
    create_table :incorrects do |t|
      t.string :incorrect_answer1
      t.string :incorrect_answer2
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
