from config import db
from model import Day,Monitor,Resouce


class Data_Wrappers(object):
    sql_time_every_project="select  PROJ, DATE_FORMAT(MAX(DATE),'%Y-%m-%d'), DATE_FORMAT(MIN(DATE),'%Y-%m-%d')  FROM \
(SELECT resource.PROJ,`day`.DATE FROM resource,`day` where resource.MAC=`day`.MAC ORDER BY PROJ) AS PROJSET GROUP BY proj"
    sql_num_month_project="select `YEAR`,`MONTH`, count(*) mac_num FROM `month`\
GROUP BY `YEAR`,`MONTH`\
ORDER BY `YEAR` ASC"
    sql_num_month_machine="select DEPT, count(*) proj_num from resource GROUP BY DEPT"

    def get_num_month_project(self):
            _num_month_project=db.engine.execute(self.sql_num_month_project).fetchall()
            return _num_month_project
    def get_time_every_project(self):
            _time_every_project=db.engine.execute(self.sql_time_every_project).fetchall()
            return _time_every_project
    def get_num_proj_dept(self):
            _num_month_machine=db.engine.execute(self.sql_num_month_machine).fetchall()
            return _num_month_machine