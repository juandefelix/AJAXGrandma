get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do

    answer = params[:user_input]
    case
    when answer == answer.upcase
      response = "NO, NOT SINCE 1983!"
    else
      response = "Speak up, kiddo!"
    end
end
