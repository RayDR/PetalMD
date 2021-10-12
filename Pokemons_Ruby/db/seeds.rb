require 'csv'
 
def load_file(fileName)
	csvLine  = 2

	csvFile 	= File.read(Rails.root.join('lib', 'seeds', "#{fileName}.csv"))
	csvData 	= CSV.parse(csvFile, headers: true)
 
	puts "\nPreparing data from: #{fileName}.\n"
 
	csvData.each do |row|
	  	begin
			Pokemon.create!(row.to_hash)
			puts "Pokemon #{row['id']}: #{row['name']} saved."
	  	rescue StandardError => e
		 	display_error(e, row, csvLine)
	  	end
 
	  	csvLine += 1
	end
 
	puts "\nUploaded data from: #{fileName} :)\n"
	puts "Now you can run the application with: rails server"
end

def display_error(e, row, line)
	puts "\nError ocurred: #{e} on line #{line} on (#{row.to_hash})\n"
end

load_file('pokemon')