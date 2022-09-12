class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.integer :number
      t.string :content
      t.string :correct_answer
      t.string :incorrect_answer1
      t.string :incorrect_answer2
      t.references :quiz, null: false, foreign_key: true

      t.timestamps
    end
  end
end
