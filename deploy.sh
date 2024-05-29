if [ -d "DevOpsProject-front" ] 
then
    echo existe
    cd DevOpsProject-front && git pull
else
    git clone https://github.com/CL-Nayib/DevOpsProject-front.git
    cd DevOpsProject-front
fi

npm i && npm run build
ls
sshpass -p "1" scp -r ./dist ubu@192.168.0.11:/home/ubu/Documents