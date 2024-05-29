if [ -d "DevOpsProject-front" ] 
then
    echo existe
    cd DevOpsProject-front && git pull
    cd ..
else
    git clone https://github.com/CL-Nayib/DevOpsProject-front.git
fi

echo enviando
ls
sshpass -p "1" scp -r ./DevOpsProject-front ubu@192.168.0.11:/home/ubu/Documents