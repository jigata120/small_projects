import time
from pynput.keyboard import Key, Controller
time.sleep (1)
kb = Controller ()
def spam(T,z,x,c,v,b,n):
    for i in range(0,100):
        time.sleep(T)

        kb.press(z)
        kb.release(z)

        kb. press(x)
        kb.release(x)

        kb.press(c)
        kb.release(c)

        kb.press(v)
        kb.release(v)

        kb.press(b)
        kb.release(b)

        kb.press(n)
        kb.release(n)

        kb.press(Key.space)
        kb.release(Key.space)

spam(1,'t','r','0','l','l','!')
