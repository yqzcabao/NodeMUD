echo('---------- Who ----------'); 

var users = getConnectedUsers(); 
for(name in users) { 
    echo('- ' + users[name]);
}

echo('-');
echo('- Total Connected: ' + users.length);
echo('-------------------------'); 
