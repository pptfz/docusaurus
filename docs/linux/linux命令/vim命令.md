[toc]



# vim命令

## 1.vim编辑器

**vi	Visual Interface	可视化界面**

**vim	vi增强版**



## 2.vim模式及模式转换

vim**模式**

- **命令模式，刚打开一个文件就是命令模式**

- **编辑模式，可以编辑内容**

- **末行模式，可进行搜索、替换、切换文件等操作**

---

**vim模式转换**

**命令模式-->编辑模式**

**i:	在当前光标所在行的字符前面，转换为编辑模式**  

**I:	在当前光标所在行的行首，转换为编辑模式**

**a:	在当前光标所在行的字符后面，转换为编辑模式**

**A:	在当前光标所在行的行尾，转换为编辑模式**

**o:	在当前光标所在行的下方，新建一行**

**O:	在当前光标所在行的上方，新建一行**



**编辑模式-->命令模式**

**ESC键**



**编辑模式-->末行模式**

**先esc	然后：**

**：**

**？**

**/** 

![iShot2020-10-15 21.13.51](https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-15%2021.13.51.png)





## 3.vim打开文件方式

- **vim +#		打开文件，并定位于第#行**

- **vim +		打开文件，定位至最后一行**

- **vim + /正则表达式	打开文件，定位至第一次被正则表达式匹配到的行的行首**



## 4.vim关闭文件方式

### 4.1 末行模式关闭文件

- **:q		退出**

- **:wq		退出并保存**

- **:q!		不保存退出**

- **:w		保存**

- **:wq!		强行保存退出**



### 4.2 编辑模式下退出

- **ZZ		保存并退出**

- **ZQ		不保存退出**



## 5.移动光标

### 5.1 逐字符移动(也可以使用上下左右箭头)

- **h	   向左**		
- **j		向下**
- **k	   向上**
- **l		向右**



**例：5l	向右移动5个字符**



### 5.2 以单词为单位移动

- **w		移至下一个词的词首**

- **e		跳至当前或下一个单词的词尾		end**

- **b		跳至当前或前一个单词的词首		back**



### 5.3 行内跳转

- **0		绝对行首**

- **^		行首的第一个非空字符**

- **$		绝对行尾**



### 5.4 行间跳转

#### 5.4.1 编辑模式跳转

- **nG、ngg		跳转至n行**

- **G			最后一行**

- **gg			第一行第一个字符**



#### 5.4.2 末行模式跳转

- **:n		跳转至n行**

- **:$		跳转至最后一行**



## 6.翻屏

- **Ctrl+f	向下翻一屏**
- **Ctrl+b	向上翻一屏**
- **Ctrl+d	向下翻半屏**
- **Ctrl+u	向上翻半屏**



## 7.删除	d

- **x		      删除当前光标所在处的单个字符**
- **X		     删除当前光标所在处前面的单个字符**
- **nx		   删除光标所在处及向后的n个字符**
- **dd		  删除当前光标所在行**
- **ndd		删除包括当前光标所在行的n行**
- **dw		  删除光标所在处到下一个词的词首**
- **de		   删除光标所在处到当前词的词尾**
- **db		   删除光标所在处到上一个单词的词首**



## 8.复制	yy

- **yy		复制当前光标所在行**
- **nyy		复制当前光标所在行及后n行**



## 9.粘贴	p

- **p		粘贴至光标所在行的下一行**
- **P		粘贴至光标所在行的上一行**



## 10.修改	c

- **cc		删除光标所在行并进入编辑模式**

- **C		删除光标所在处到本行结尾并进入编辑模式**



## 11.替换	r

- **r		编辑模式直接按r替换，一次只能替换一个**

- **R		替换模式，可以替换多个**



## 12.撤销	u

- **u		撤销前一次的编辑操作，连续u命令可以撤销此前的n次编辑操作**

- **nu		直接撤销最近n次编辑操作**

- **Ctrl+r	撤销撤销操作**



## 13.重复前一次操作

> **编辑模式按“.”键，会重复前一次的操作，比替换、编辑、删除等**



## 14.可视化操作

- **v		按字符选取**

- **V		按矩形选取**

- **ctrl+v	批量操作，先选中要操作的区域，然后大写I编辑，esc，回车即可完成编辑**



## 15.查找(末行模式)

- **/		从上而下**

- **？		从下而上**



## 16.查找并替换(末行模式)

**s**

- **%表示全文**

- **g表示全部替换**



**示例**

> **1,3s/A/B**
>
> **1,$s/A/B**
>
> **%s/A/B**
>
> **%s/A/B/g**



## 17.vim编辑多个文件

**vim file1 file2 file3 ...**

- **:next	    切换至下一个文件**

- **:prev	    切换至上一个文件**

- **:last		 切换至最后一个文件**

- **:first		切换至第一个文件**



## 18.高级话题

### 18.1 显示或取消行号

- **:set nu**

- **:set nonu**



### 18.2 查找到的文本高亮显示或取消高亮显示

- **:set hls**

- **:set nohls**



## 19.vim配置文件

- **/etc/vimrc**

- **~/.vimrc**
