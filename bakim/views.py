from django.shortcuts import render 


def aboutus(request):
    return render(request, 'aboutus.html')

def homeng(request):
    return render(request, 'homeng.html')

def home(request):
    return render(request, 'home.html')

def login(request):
    return render(request, 'login.html')

def products(request):
    return render(request, 'products.html')

def signup(request):
    return render(request, 'signup.html')

def test(request):
    return render(request, 'test.html')

def tips(request):
    return render(request, 'tips.html')

def yagli(request):
    return render(request, 'yagli.html')

def karma(request):
    return render(request, 'karma.html')

def kuru(request):
    return render(request, 'kuru.html')

def hassas(request):
    return render(request, 'hassas.html')

