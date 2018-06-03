class ReturnsController < ApplicationController



  def index
        
  end

  def generate
     @return2 = Return.create({city: "Запоріжжя", consignmentNote: rand(20450010000..20450090000), 
        cashback: rand(200..20000), telephoneNumber: rand(675763650..675763665)  })
     @return1 = Return.last.consignmentNote
    for i in (1..3).step(1) do
      @return = Return.create({city: "Запоріжжя", consignmentNote: @return1.to_i + i, 
        cashback: rand(200..20000), telephoneNumber: rand(675763650..675763665)  });
    end
    respond_to do |format|
      format.html {redirect_to returns_url}
      format.js

    end
  end

  def sort
    @resultArray = Array.new
    @returnLast = Return.last.id
    @returnFirst = Return.first.id    

    
    @i = @returnLast
    begin
      @j = @returnLast
      @count = 0
      @itel = Return.find_by_id(@i).telephoneNumber
        begin
        @btel = Return.find_by_id(@j).telephoneNumber
        if @itel == @btel
          @count += 1
        end      
         @j -= 1    
        end while @j > @returnFirst 

       if @count == 1 && Return.find_by_id(@i).cashback > 10000
       @resultArray << Return.find_by_id(@i)  
        end
       @count = 0;      
       @i -= 1
    end while @i > @returnFirst        
    
    respond_to do |format|
      format.html {redirect_to returns_url}
      format.js
      format.csv { send_data Return.where( id: @resultArray.map(&:id)).to_csv, filename: 'Спиcок.csv' }

    end


  end

 def erase
      @return1 = Return.all
      @return1.each do |t|
        t.destroy
      end
      redirect_to returns_url
  end

  def list
    @return = Return.all
    respond_to do |format|
      format.html {redirect_to returns_url}
      format.js
      format.csv { send_data @return.to_csv}
    end
    
  end
end
