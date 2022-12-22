FROM python:3.10-slim

WORKDIR /app

RUN apt-get update < /dev/null
RUN echo "y" | apt-get install python3-tk
RUN pip3 install flask 
RUN pip3 install flask_cors
RUN pip3 install flask_sqlalchemy

COPY . .

CMD flask run -h 0.0.0.0 -p 5000