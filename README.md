Setup instructions
## bundle install

cd into client folder in your terminal
## npm install

Foreman:
## gem install foreman
after foreman gem installed do the following:
    - Create a Procfile.dev in you main folder
    - copy and paste the following to Procfile.dev: 
    //////////////////////////////////////////////
        web: rails server -p 3000
        client: npm start --prefix client
    /////////////////////////////////////////////
    - in your terminal: 
        foreman start -f  Procfile.dev

        test readmechange for andrewbranch

