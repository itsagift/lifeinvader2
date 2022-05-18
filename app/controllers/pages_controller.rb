class PagesController < ApplicationController
  def home
  end

  def about
    x = 100
    x += 1
    puts x
    @score = 100_000
    # return render json: {score: @score}, status: 200
  end

  def element
    return render json: {message: '200'}
  end

  def info
  end
end
