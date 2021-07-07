import tkinter as tk
import tkinter.ttk as ttk
from tkinter import messagebox


class PannagaappWidget(tk.Frame):
    def __init__(self, master=None, **kw):
        tk.Frame.__init__(self, master, **kw)
        self.frame_2 = tk.Frame(self)
        self.button_1 = tk.Button(self.frame_2)
        self.button_1.config(text='PressMe')
        self.button_1.pack(side='top')
        self.button_1.configure(command=self.printpannaga)
        self.entry_1 = tk.Entry(self.frame_2)
        self.entry_1.pack(side='top')
        self.frame_2.config(height='200', width='200')
        self.frame_2.pack(side='top')

    def printpannaga(self):
        username=self.entry_1.get()
        messagebox.showinfo('hello','hello'+username)


if __name__ == '__main__':
    root = tk.Tk()
    widget = PannagaappWidget(root)
    widget.pack(expand=True, fill='both')
    root.mainloop()

