from django.shortcuts import get_object_or_404, render, redirect
from .models import Polls
from .forms import MyForm


# Create your views here.

def polls_list(request):
    polls = Polls.objects.all()

    return render(request, 'polls/list.html', {"polls": polls})


def polls_detail(request, id):
    poll = get_object_or_404(Polls, id=id)

    return render(request, 'polls/detail.html', {"poll":"poll"})


def my_view(request):
    form = MyForm()
    return render(request, "polls/my_template.html", {"form": form})
