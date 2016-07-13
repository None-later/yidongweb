#encoding=utf-8
from data_wrappers import Data_Wrappers
from datetime import datetime ,date,time
data=Data_Wrappers()

#获得中英文映射表
map_dic={}
for row in data.get_mapping():
    map_dic[row[0]]=row[1]


#获得每个部所里的项目个数
_dept_name=[]
_dept_pnum=[]
for row in data.get_num_project_dept():
    if row[0] in map_dic.keys():
        _dept_name.append(map_dic[row[0]])
    else:
        _dept_name.append(row[0])

    _dept_pnum.append(row[1])



#获得每个项目所花费的时间
_all_days=[]
_project_name=[]

for row in data.get_time_every_project():
    if row[0] in map_dic.keys():

        _project_name.append(map_dic[row[0]])
    else:
        _project_name.append(row[0])

    _all_days.append((row[1]-row[2]).days)


#获得最近12个月内的虚拟机的个数
_year=[]
_month=[]
_machineNum=[]

dic={}
dict={}
for row in data.get_num_machine_month():
    _year.append(row[0])
    _month.append(row[1])
    temp=int(row[0])*100+int(row[1])
    _machineNum.append(row[2])
    dic[temp]=row[2]
dic=sorted(dic.items(),key=lambda d: d[0])
virtual_date=[]
virtual_num=[]

for item in dic:
    year=item[0]/100
    month=item[0]%100
    virtual_date.append(str(year)+"-"+str(month))
    virtual_num.append(item[1])



#     #print row[1]
#
# for (k,v) in map_dic.items():
#     v.encode('utf-8')
#     print v
#
# print map_dic