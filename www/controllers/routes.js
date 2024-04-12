//Declare environment
const local_server = "https://localhost:44354/api/"                         //Write localhost and port
const public_server = "https://BuscaminasEmojis.bsite.net/api/"                        //Write WEB API public address

//Select your environment (local or public server)
const env = public_server

//Score
const postScore_route = env + "Scores"
const getAllTimeRecord_route = env + "Scores/getAllTimeRecord"