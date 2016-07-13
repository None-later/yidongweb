from app import db
from model import Day,Monitor,Resouce

class Data_Wrappers(object):
    sql_time_every_project="select  PROJ, MAX(DATE),MIN(DATE)  FROM \
(SELECT resource.PROJ,`day`.DATE FROM resource,`day` where resource.MAC=`day`.MAC ORDER BY PROJ) AS PROJSET GROUP BY proj"
#     sql_time_every_project="select  PROJ, DATE_FORMAT(MAX(DATE),'%Y-%m-%d'), DATE_FORMAT(MIN(DATE),'%Y-%m-%d')  FROM \
# (SELECT resource.PROJ,`day`.DATE FROM resource,`day` where resource.MAC=`day`.MAC ORDER BY PROJ) AS PROJSET GROUP BY proj"
    sql_num_machine_month="select `YEAR`,`MONTH`, count(*) mac_num FROM `month`\
GROUP BY `YEAR`,`MONTH`\
ORDER BY `YEAR` ASC"
    sql_num_project_dept="select DEPT, count(*) proj_num from resource GROUP BY DEPT"

    sql_mapping='select name_en,name_ch from mapping'

    def get_num_machine_month(self):
            _num_machine_month=db.engine.execute(self.sql_num_machine_month).fetchall()
            return _num_machine_month
    def get_time_every_project(self):
            _time_every_project=db.engine.execute(self.sql_time_every_project).fetchall()
            return _time_every_project
    def get_num_project_dept(self):
            _num_project_dept=db.engine.execute(self.sql_num_project_dept).fetchall()
            return _num_project_dept
    def get_mapping(self):
            _mapping=db.engine.execute(self.sql_mapping).fetchall()
            return _mapping