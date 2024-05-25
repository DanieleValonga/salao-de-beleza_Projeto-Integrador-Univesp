from flask import Flask, render_template, redirect, url_for, request


app = Flask(__name__, template_folder='template', static_folder='public')

session = {}
clientes = []
#---Pages---
#Tela de Principal
@app.route('/')
def home():
    return render_template('jinja_main.html')

#Tela de Agenda
@app.route('/agenda')
def agenda():
    return render_template('jinja_agenda.html')

#Tela de login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # Aqui você deve adicionar a lógica de autenticação. Este é apenas um exemplo simples.
        if username == "admin" and password == "password":  # Substitua com sua lógica de autenticação
            return redirect(url_for('adm'))
        else:
            return "Credenciais inválidas", 401
    return render_template('jinja_login.html')

#Rota de logout
@app.route('/logout')
def logout():
    return redirect(url_for('home'))

#Tela principal adm
@app.route('/adm')
def adm():
    return render_template('jinja_adm.html')

#Tela Cadastro de Clientes
@app.route("/cadastro_cliente")
def cadastro_cliente():
    return render_template("/jinja_cadastro_clientes.html")

#Tela Cadastro de Serviços
@app.route("/cadastro_servicos")
def cadastro_servicos():
    return render_template("/jinja_cadastro_servicos.html")

#Tela Cadastro de Funcionarios
@app.route("/cadastro_funcionarios")
def cadastro_funcionarios():
    return render_template("/jinja_cadastro_funcionarios.html")

#Tela Clientes Cadastrados
@app.route("/clientes_cadastrados")
def clientes_cadastrados():
    return render_template("/jinja_clientes_cadastrados.html")

#Tela Serviços Cadastrados
@app.route("/servicos_cadastrados")
def servicos_cadastrados():
    return render_template("/jinja_servicos_cadastrados.html")

#Tela Funcionarios Cadastrados
@app.route("/funcionarios_cadastrados")
def funcionarios_cadastrados():
    return render_template("/jinja_funcionarios_cadastrados.html")

#---APIs---





if __name__ == '__main__':
    app.run(debug=True)