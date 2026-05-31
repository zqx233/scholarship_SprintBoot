-- MySQL dump 10.13  Distrib 5.7.44, for Linux (x86_64)
--
-- Host: localhost    Database: cl982487198
-- ------------------------------------------------------
-- Server version	5.7.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `cl982487198`
--

/*!40000 DROP DATABASE IF EXISTS `cl982487198`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `cl982487198` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `cl982487198`;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `value` longtext COLLATE utf8mb4_unicode_ci COMMENT '值',
  `url` longtext COLLATE utf8mb4_unicode_ci COMMENT '链接',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='轮播图';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'2026-01-25 09:42:44','swiper1','file/swiperPicture1.jpg',NULL),(2,'2026-01-25 09:42:44','swiper2','file/swiperPicture2.jpg',NULL),(3,'2026-01-25 09:42:44','swiper3','file/1769334513974.webp',NULL);
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fudaoyuan`
--

DROP TABLE IF EXISTS `fudaoyuan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fudaoyuan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `fudaoyuanzhanghao` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '辅导员账号',
  `mima` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密码',
  `fudaoyuanxingming` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '辅导员姓名',
  `touxiang` longtext COLLATE utf8mb4_unicode_ci COMMENT '头像',
  `lianxifangshi` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '联系方式',
  PRIMARY KEY (`id`),
  UNIQUE KEY `fudaoyuanzhanghao` (`fudaoyuanzhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=1769334350618 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='辅导员';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fudaoyuan`
--

LOCK TABLES `fudaoyuan` WRITE;
/*!40000 ALTER TABLE `fudaoyuan` DISABLE KEYS */;
INSERT INTO `fudaoyuan` VALUES (61,'2026-01-25 09:42:44','6','123456','陈雨','file/fudaoyuan_陈雨1.jpg,file/fudaoyuan_陈雨2.jpg,file/fudaoyuan_陈雨3.jpg','13400134006'),(62,'2026-01-25 09:42:44','14','123456','朱琳','file/fudaoyuan_朱琳1.jpg,file/fudaoyuan_朱琳2.jpg,file/fudaoyuan_朱琳3.jpg','13600136014'),(63,'2026-01-25 09:42:44','5','123456','刘阳','file/fudaoyuan_刘阳1.jpg,file/fudaoyuan_刘阳2.jpg,file/fudaoyuan_刘阳3.jpg','13500135005'),(64,'2026-01-25 09:42:44','2','123456','李娜','file/fudaoyuan_李娜1.jpg,file/fudaoyuan_李娜2.jpg,file/fudaoyuan_李娜3.jpg','13900139002'),(65,'2026-01-25 09:42:44','8','123456','吴婷','file/fudaoyuan_吴婷1.jpg,file/fudaoyuan_吴婷2.jpg,file/fudaoyuan_吴婷3.jpg','13200132008'),(66,'2026-01-25 09:42:44','3','123456','王浩','file/fudaoyuan_王浩1.jpg,file/fudaoyuan_王浩2.jpg,file/fudaoyuan_王浩3.jpg','13700137003'),(67,'2026-01-25 09:42:44','23','123456','彭伟','file/fudaoyuan_彭伟1.jpg,file/fudaoyuan_彭伟2.jpg,file/fudaoyuan_彭伟3.jpg','13700137023'),(68,'2026-01-25 09:42:44','18','123456','田甜','file/fudaoyuan_田甜1.jpg,file/fudaoyuan_田甜2.jpg,file/fudaoyuan_田甜3.jpg','13200132018'),(69,'2026-01-25 09:42:44','9','123456','郑凯','file/fudaoyuan_郑凯1.jpg,file/fudaoyuan_郑凯2.jpg,file/fudaoyuan_郑凯3.jpg','13100131009'),(70,'2026-01-25 09:42:44','24','123456','戴琪','file/fudaoyuan_戴琪1.jpg,file/fudaoyuan_戴琪2.jpg,file/fudaoyuan_戴琪3.jpg','13600136024'),(1769334350617,'2026-01-25 09:45:50','11','11','11','file/1769334346751.webp','15215215215');
/*!40000 ALTER TABLE `fudaoyuan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jiangxuejin`
--

DROP TABLE IF EXISTS `jiangxuejin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jiangxuejin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `mingcheng` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名称',
  `leixing` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型',
  `xiangqing` longtext COLLATE utf8mb4_unicode_ci COMMENT '详情',
  `jine` double DEFAULT NULL COMMENT '金额',
  `shenqingduixiang` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '申请对象',
  `zhuanyexianzhi` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '专业限制',
  `GPAyaoqiu` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'GPA要求',
  `yuyanyaoqiu` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '语言要求',
  `fengmian` longtext COLLATE utf8mb4_unicode_ci COMMENT '封面',
  `fudaoyuanzhanghao` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '辅导员账号',
  `fudaoyuanxingming` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '辅导员姓名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='奖学金';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jiangxuejin`
--

LOCK TABLES `jiangxuejin` WRITE;
/*!40000 ALTER TABLE `jiangxuejin` DISABLE KEYS */;
INSERT INTO `jiangxuejin` VALUES (1,'2026-01-25 09:42:44','残疾人奖学金','国家级','奖励表现优秀的残疾学生',5000,'残疾本科生','无','≥3.0','无要求','file/jiangxuejin_残疾人奖学金1.jpg,file/jiangxuejin_残疾人奖学金2.jpg,file/jiangxuejin_残疾人奖学金3.jpg','6','陈雨'),(2,'2026-01-25 09:42:44','国际交流奖学金','校级','资助优秀学生参加国际交流项目',10000,'大二及以上','无','≥3.7','雅思6.0或托福80','file/jiangxuejin_国际交流奖学金1.jpg,file/jiangxuejin_国际交流奖学金2.jpg,file/jiangxuejin_国际交流奖学金3.jpg','14','朱琳'),(3,'2026-01-25 09:42:44','人工智能奖学金','企业级','奖励在AI领域有潜力的学生',8000,'大二及以上','计算机类优先','≥3.8','英语六级通过','file/jiangxuejin_人工智能奖学金1.jpg,file/jiangxuejin_人工智能奖学金2.jpg,file/jiangxuejin_人工智能奖学金3.jpg','5','刘阳'),(4,'2026-01-25 09:42:44','国家励志奖学金','国家级','奖励品学兼优的家庭经济困难学生',5000,'大二及以上','无','≥3.5','英语四级通过','file/jiangxuejin_国家励志奖学金1.jpg,file/jiangxuejin_国家励志奖学金2.jpg,file/jiangxuejin_国家励志奖学金3.jpg','2','李娜'),(5,'2026-01-25 09:42:44','少数民族奖学金','校级','奖励表现优秀的少数民族学生',3000,'少数民族本科生','无','≥3.0','无要求','file/jiangxuejin_少数民族奖学金1.jpg,file/jiangxuejin_少数民族奖学金2.jpg,file/jiangxuejin_少数民族奖学金3.jpg','8','吴婷'),(6,'2026-01-25 09:42:44','乡村振兴奖学金','国家级','奖励参与乡村振兴项目的优秀学生',5000,'大二及以上','农学类优先','≥3.5','无要求','file/jiangxuejin_乡村振兴奖学金1.jpg,file/jiangxuejin_乡村振兴奖学金2.jpg,file/jiangxuejin_乡村振兴奖学金3.jpg','3','王浩'),(7,'2026-01-25 09:42:44','偏远地区奖学金','校级','奖励来自偏远地区且表现优秀的学生',4000,'偏远地区本科生','无','≥3.2','无要求','file/jiangxuejin_偏远地区奖学金1.jpg,file/jiangxuejin_偏远地区奖学金2.jpg,file/jiangxuejin_偏远地区奖学金3.jpg','23','彭伟'),(8,'2026-01-25 09:42:44','社会实践奖学金','校级','奖励在社会实践中表现突出的学生',2000,'全体本科生','无','≥3.0','无要求','file/jiangxuejin_社会实践奖学金1.jpg,file/jiangxuejin_社会实践奖学金2.jpg,file/jiangxuejin_社会实践奖学金3.jpg','18','田甜'),(9,'2026-01-25 09:42:44','校友奖学金','校友级','由校友捐赠奖励优秀或困难学生',4000,'全体本科生','无','≥3.3','无要求','file/jiangxuejin_校友奖学金1.jpg,file/jiangxuejin_校友奖学金2.jpg,file/jiangxuejin_校友奖学金3.jpg','9','郑凯'),(10,'2026-01-25 09:42:44','校长奖学金','校级','奖励全面发展表现突出的学生',10000,'全体本科生','无','≥3.8','英语六级通过','file/jiangxuejin_校长奖学金1.jpg,file/jiangxuejin_校长奖学金2.jpg,file/jiangxuejin_校长奖学金3.jpg','24','戴琪'),(11,'2026-01-25 09:46:40','11','11','11',11,'11','11','11','11','file/1769334399144.webp','11','11');
/*!40000 ALTER TABLE `jiangxuejin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jiangxuejinshenqing`
--

DROP TABLE IF EXISTS `jiangxuejinshenqing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jiangxuejinshenqing` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `mingcheng` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名称',
  `leixing` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型',
  `xiangqing` longtext COLLATE utf8mb4_unicode_ci COMMENT '详情',
  `jine` double DEFAULT NULL COMMENT '金额',
  `shenqingduixiang` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '申请对象',
  `zhuanyexianzhi` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '专业限制',
  `GPAyaoqiu` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'GPA要求',
  `yuyanyaoqiu` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '语言要求',
  `fengmian` longtext COLLATE utf8mb4_unicode_ci COMMENT '封面',
  `fudaoyuanzhanghao` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '辅导员账号',
  `fudaoyuanxingming` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '辅导员姓名',
  `xuehao` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '学号',
  `xueshengxingming` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '学生姓名',
  `tijiaoshijian` datetime DEFAULT NULL COMMENT '提交时间',
  `tijiaomiaoshu` longtext COLLATE utf8mb4_unicode_ci COMMENT '提交描述',
  `tijiaowenjian` longtext COLLATE utf8mb4_unicode_ci COMMENT '提交文件',
  `sfsh` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext COLLATE utf8mb4_unicode_ci COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='奖学金申请';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jiangxuejinshenqing`
--

LOCK TABLES `jiangxuejinshenqing` WRITE;
/*!40000 ALTER TABLE `jiangxuejinshenqing` DISABLE KEYS */;
INSERT INTO `jiangxuejinshenqing` VALUES (1,'2026-01-25 09:42:44','残疾人奖学金','国家级','奖励表现优秀的残疾学生',5000,'残疾本科生','无','≥3.0','无要求','file/jiangxuejinshenqing_残疾人奖学金1.jpg,file/jiangxuejinshenqing_残疾人奖学金2.jpg,file/jiangxuejinshenqing_残疾人奖学金3.jpg','6','陈雨','6','陈雨','2026-01-25 17:42:44','提交描述1','','是',''),(2,'2026-01-25 09:42:44','国际交流奖学金','校级','资助优秀学生参加国际交流项目',10000,'大二及以上','无','≥3.7','雅思6.0或托福80','file/jiangxuejinshenqing_国际交流奖学金1.jpg,file/jiangxuejinshenqing_国际交流奖学金2.jpg,file/jiangxuejinshenqing_国际交流奖学金3.jpg','14','朱琳','14','朱琳','2026-01-25 17:42:44','提交描述2','','是',''),(3,'2026-01-25 09:42:44','人工智能奖学金','企业级','奖励在AI领域有潜力的学生',8000,'大二及以上','计算机类优先','≥3.8','英语六级通过','file/jiangxuejinshenqing_人工智能奖学金1.jpg,file/jiangxuejinshenqing_人工智能奖学金2.jpg,file/jiangxuejinshenqing_人工智能奖学金3.jpg','5','刘阳','5','刘阳','2026-01-25 17:42:44','提交描述3','','是',''),(4,'2026-01-25 09:42:44','国家励志奖学金','国家级','奖励品学兼优的家庭经济困难学生',5000,'大二及以上','无','≥3.5','英语四级通过','file/jiangxuejinshenqing_国家励志奖学金1.jpg,file/jiangxuejinshenqing_国家励志奖学金2.jpg,file/jiangxuejinshenqing_国家励志奖学金3.jpg','2','李娜','2','李娜','2026-01-25 17:42:44','提交描述4','','是',''),(5,'2026-01-25 09:42:44','少数民族奖学金','校级','奖励表现优秀的少数民族学生',3000,'少数民族本科生','无','≥3.0','无要求','file/jiangxuejinshenqing_少数民族奖学金1.jpg,file/jiangxuejinshenqing_少数民族奖学金2.jpg,file/jiangxuejinshenqing_少数民族奖学金3.jpg','8','吴婷','8','吴婷','2026-01-25 17:42:44','提交描述5','','是',''),(6,'2026-01-25 09:42:44','乡村振兴奖学金','国家级','奖励参与乡村振兴项目的优秀学生',5000,'大二及以上','农学类优先','≥3.5','无要求','file/jiangxuejinshenqing_乡村振兴奖学金1.jpg,file/jiangxuejinshenqing_乡村振兴奖学金2.jpg,file/jiangxuejinshenqing_乡村振兴奖学金3.jpg','3','王浩','3','王浩','2026-01-25 17:42:44','提交描述6','','是',''),(7,'2026-01-25 09:42:44','偏远地区奖学金','校级','奖励来自偏远地区且表现优秀的学生',4000,'偏远地区本科生','无','≥3.2','无要求','file/jiangxuejinshenqing_偏远地区奖学金1.jpg,file/jiangxuejinshenqing_偏远地区奖学金2.jpg,file/jiangxuejinshenqing_偏远地区奖学金3.jpg','23','彭伟','23','彭伟','2026-01-25 17:42:44','提交描述7','','是',''),(8,'2026-01-25 09:42:44','社会实践奖学金','校级','奖励在社会实践中表现突出的学生',2000,'全体本科生','无','≥3.0','无要求','file/jiangxuejinshenqing_社会实践奖学金1.jpg,file/jiangxuejinshenqing_社会实践奖学金2.jpg,file/jiangxuejinshenqing_社会实践奖学金3.jpg','18','田甜','18','田甜','2026-01-25 17:42:44','提交描述8','','是',''),(9,'2026-01-25 09:42:44','校友奖学金','校友级','由校友捐赠奖励优秀或困难学生',4000,'全体本科生','无','≥3.3','无要求','file/jiangxuejinshenqing_校友奖学金1.jpg,file/jiangxuejinshenqing_校友奖学金2.jpg,file/jiangxuejinshenqing_校友奖学金3.jpg','9','郑凯','9','郑凯','2026-01-25 17:42:44','提交描述9','','是',''),(10,'2026-01-25 09:42:44','校长奖学金','校级','奖励全面发展表现突出的学生',10000,'全体本科生','无','≥3.8','英语六级通过','file/jiangxuejinshenqing_校长奖学金1.jpg,file/jiangxuejinshenqing_校长奖学金2.jpg,file/jiangxuejinshenqing_校长奖学金3.jpg','24','戴琪','24','戴琪','2026-01-25 17:42:44','提交描述10','','是',''),(11,'2026-01-25 09:47:10','11','11','11',11,'11','11','11','11','file/1769334399144.webp','11','11','11','11','2026-01-25 17:47:06','11','file/1769334429462.webp','是','OK');
/*!40000 ALTER TABLE `jiangxuejinshenqing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leixing`
--

DROP TABLE IF EXISTS `leixing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leixing` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `leixing` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='类型';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leixing`
--

LOCK TABLES `leixing` WRITE;
/*!40000 ALTER TABLE `leixing` DISABLE KEYS */;
INSERT INTO `leixing` VALUES (1,'2026-01-25 09:42:44','国家级'),(2,'2026-01-25 09:42:44','校级'),(3,'2026-01-25 09:42:44','企业级'),(4,'2026-01-25 09:42:44','国家级'),(5,'2026-01-25 09:42:44','校级'),(6,'2026-01-25 09:42:44','国家级'),(7,'2026-01-25 09:42:44','校级'),(8,'2026-01-25 09:42:44','校级'),(9,'2026-01-25 09:42:44','校友级'),(10,'2026-01-25 09:42:44','校级'),(11,'2026-01-25 09:46:22','11');
/*!40000 ALTER TABLE `leixing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `menujson` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '菜单',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='菜单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'2026-01-25 09:42:44','[{\"backMenu\":[{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\",\"审核\",\"申请人数\",\"通过率\",\"首页总数\",\"首页统计\"],\"appFrontIcon\":\"cuIcon-similar\",\"buttons\":[\"查看\"],\"classname\":\"jiangxuejinshenqing\",\"menu\":\"奖学金申请\",\"menuJump\":\"列表\",\"tableName\":\"jiangxuejinshenqing\"}],\"fontClass\":\"icon-common2\",\"menu\":\"奖学金申请管理\",\"unicode\":\"&#xeda4;\"}],\"frontMenu\":[{\"child\":[{\"appFrontIcon\":\"cuIcon-skin\",\"buttons\":[\"查看\",\"申请\"],\"classname\":\"jiangxuejin\",\"menu\":\"奖学金\",\"menuJump\":\"列表\",\"tableName\":\"jiangxuejin\"}],\"menu\":\"奖学金管理\"}],\"hasBackLogin\":\"否\",\"hasBackRegister\":\"否\",\"hasFrontLogin\":\"是\",\"hasFrontRegister\":\"是\",\"pathName\":\"xuesheng\",\"roleName\":\"学生\",\"tableName\":\"xuesheng\"},{\"backMenu\":[{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\",\"奖学金项目\",\"类型\",\"奖学金额度\",\"申请对象\",\"专业限制\",\"GPA要求\",\"首页总数\",\"首页统计\",\"申请\"],\"appFrontIcon\":\"cuIcon-flashlightopen\",\"buttons\":[\"查看\"],\"classname\":\"jiangxuejin\",\"menu\":\"奖学金\",\"menuJump\":\"列表\",\"tableName\":\"jiangxuejin\"}],\"fontClass\":\"icon-common18\",\"menu\":\"奖学金管理\",\"unicode\":\"&#xedff;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\",\"审核\",\"申请人数\",\"通过率\",\"首页总数\",\"首页统计\"],\"appFrontIcon\":\"cuIcon-similar\",\"buttons\":[\"查看\",\"审核\"],\"classname\":\"jiangxuejinshenqing\",\"menu\":\"奖学金申请\",\"menuJump\":\"列表\",\"tableName\":\"jiangxuejinshenqing\"}],\"fontClass\":\"icon-common2\",\"menu\":\"奖学金申请管理\",\"unicode\":\"&#xeda4;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"appFrontIcon\":\"cuIcon-present\",\"buttons\":[\"查看\"],\"classname\":\"systemNotice\",\"menu\":\"系统公告\",\"menuJump\":\"列表\",\"tableName\":\"system_notice\"}],\"fontClass\":\"icon-common48\",\"menu\":\"系统公告管理\",\"unicode\":\"&#xef65;\"}],\"frontMenu\":[{\"child\":[{\"appFrontIcon\":\"cuIcon-skin\",\"buttons\":[\"查看\",\"申请\"],\"classname\":\"jiangxuejin\",\"menu\":\"奖学金\",\"menuJump\":\"列表\",\"tableName\":\"jiangxuejin\"}],\"menu\":\"奖学金管理\"}],\"hasBackLogin\":\"是\",\"hasBackRegister\":\"是\",\"hasFrontLogin\":\"否\",\"hasFrontRegister\":\"否\",\"pathName\":\"fudaoyuan\",\"roleName\":\"辅导员\",\"tableName\":\"fudaoyuan\"},{\"backMenu\":[{\"child\":[{\"allButtons\":[\"查看\"],\"appFrontIcon\":\"cuIcon-cardboard\",\"buttons\":[\"查看\"],\"classname\":\"board\",\"menu\":\"看板\",\"tableName\":\"board\"}],\"menu\":\"看板管理\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"appFrontIcon\":\"cuIcon-circle\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"classname\":\"syslog\",\"menu\":\"操作日志\",\"menuJump\":\"列表\",\"tableName\":\"syslog\"}],\"fontClass\":\"icon-common46\",\"menu\":\"操作日志管理\",\"unicode\":\"&#xef3d;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\",\"奖学金项目\",\"类型\",\"奖学金额度\",\"申请对象\",\"专业限制\",\"GPA要求\",\"首页总数\",\"首页统计\",\"申请\"],\"appFrontIcon\":\"cuIcon-flashlightopen\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\",\"奖学金项目\",\"类型\",\"奖学金额度\",\"申请对象\",\"专业限制\",\"GPA要求\",\"首页总数\",\"首页统计\"],\"classname\":\"jiangxuejin\",\"menu\":\"奖学金\",\"menuJump\":\"列表\",\"tableName\":\"jiangxuejin\"}],\"fontClass\":\"icon-common18\",\"menu\":\"奖学金管理\",\"unicode\":\"&#xedff;\"},{\"child\":[{\"allButtons\":[\"菜单管理\"],\"appFrontIcon\":\"cuIcon-addressbook\",\"buttons\":[\"菜单管理\"],\"classname\":\"menu\",\"menu\":\"菜单\",\"menuJump\":\"列表\",\"tableName\":\"menu\"}],\"fontClass\":\"icon-common21\",\"menu\":\"菜单管理\",\"unicode\":\"&#xee03;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"appFrontIcon\":\"cuIcon-present\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"classname\":\"systemNotice\",\"menu\":\"系统公告\",\"menuJump\":\"列表\",\"tableName\":\"system_notice\"}],\"fontClass\":\"icon-common48\",\"menu\":\"系统公告管理\",\"unicode\":\"&#xef65;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"appFrontIcon\":\"cuIcon-cardboard\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"classname\":\"xuesheng\",\"menu\":\"学生\",\"menuJump\":\"列表\",\"tableName\":\"xuesheng\"}],\"fontClass\":\"icon-user5\",\"menu\":\"学生管理\",\"unicode\":\"&#xef9b;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\",\"审核\",\"申请人数\",\"通过率\",\"首页总数\",\"首页统计\"],\"appFrontIcon\":\"cuIcon-similar\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\",\"审核\",\"申请人数\",\"首页总数\",\"首页统计\",\"通过率\"],\"classname\":\"jiangxuejinshenqing\",\"menu\":\"奖学金申请\",\"menuJump\":\"列表\",\"tableName\":\"jiangxuejinshenqing\"}],\"fontClass\":\"icon-common2\",\"menu\":\"奖学金申请管理\",\"unicode\":\"&#xeda4;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"appFrontIcon\":\"cuIcon-paint\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"classname\":\"users\",\"menu\":\"管理员\",\"menuJump\":\"列表\",\"tableName\":\"users\"}],\"fontClass\":\"icon-user7\",\"menu\":\"管理员管理\",\"unicode\":\"&#xef9d;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"appFrontIcon\":\"cuIcon-list\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"classname\":\"leixing\",\"menu\":\"类型\",\"menuJump\":\"列表\",\"tableName\":\"leixing\"}],\"fontClass\":\"icon-common11\",\"menu\":\"类型管理\",\"unicode\":\"&#xeded;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"appFrontIcon\":\"cuIcon-rank\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"classname\":\"config\",\"menu\":\"轮播图\",\"menuJump\":\"列表\",\"tableName\":\"config\"}],\"fontClass\":\"icon-common40\",\"menu\":\"轮播图管理\",\"unicode\":\"&#xeebb;\"},{\"child\":[{\"allButtons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"appFrontIcon\":\"cuIcon-camera\",\"buttons\":[\"新增\",\"查看\",\"修改\",\"删除\"],\"classname\":\"fudaoyuan\",\"menu\":\"辅导员\",\"menuJump\":\"列表\",\"tableName\":\"fudaoyuan\"}],\"fontClass\":\"icon-user6\",\"menu\":\"辅导员管理\",\"unicode\":\"&#xef9c;\"}],\"frontMenu\":[{\"child\":[{\"appFrontIcon\":\"cuIcon-skin\",\"buttons\":[\"查看\",\"申请\"],\"classname\":\"jiangxuejin\",\"menu\":\"奖学金\",\"menuJump\":\"列表\",\"tableName\":\"jiangxuejin\"}],\"menu\":\"奖学金管理\"}],\"hasBackLogin\":\"是\",\"hasBackRegister\":\"否\",\"hasFrontLogin\":\"否\",\"hasFrontRegister\":\"否\",\"pathName\":\"users\",\"roleName\":\"管理员\",\"tableName\":\"users\"}]');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `syslog`
--

DROP TABLE IF EXISTS `syslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `syslog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `username` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '用户名',
  `operation` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '用户操作',
  `method` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '请求方法',
  `params` longtext COLLATE utf8mb4_unicode_ci COMMENT '请求参数',
  `time` bigint(20) DEFAULT NULL COMMENT '请求时长(毫秒)',
  `ip` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ip地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='操作日志';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `syslog`
--

LOCK TABLES `syslog` WRITE;
/*!40000 ALTER TABLE `syslog` DISABLE KEYS */;
/*!40000 ALTER TABLE `syslog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_notice`
--

DROP TABLE IF EXISTS `system_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_notice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `content` longtext COLLATE utf8mb4_unicode_ci COMMENT '公告内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='系统公告';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_notice`
--

LOCK TABLES `system_notice` WRITE;
/*!40000 ALTER TABLE `system_notice` DISABLE KEYS */;
INSERT INTO `system_notice` VALUES (1,'2026-01-25 09:42:44','公告信息...'),(2,'2026-01-25 09:48:19','<p>11<img src=\"http://localhost:8080/cl982487198/file/1769334496219.webp\" alt=\"\" data-href=\"\" style=\"\"/></p>');
/*!40000 ALTER TABLE `system_notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `tablename` varchar(100) DEFAULT NULL COMMENT '表名',
  `role` varchar(100) DEFAULT NULL COMMENT '角色',
  `token` varchar(200) NOT NULL COMMENT '密码',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  `expiratedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='token表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,1,'admin','users','管理员','muerum2pg94uivnisb719nrzmutmpsyv','2026-01-25 09:43:56','2026-01-25 10:47:50'),(2,1769334332808,'11','xuesheng','学生','q0zhhgyqq6mv8j01yurx0y3r2k7ktcev','2026-01-25 09:45:37','2026-01-25 10:45:38'),(3,1769334350617,'11','fudaoyuan','辅导员','6kxn0vmjn8uuxiyzwfebmmto244x6h6n','2026-01-25 09:45:54','2026-01-25 10:46:47');
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `username` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密码',
  `role` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '管理员' COMMENT '角色',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理员';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2026-01-25 09:42:44','admin','admin','管理员');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xuesheng`
--

DROP TABLE IF EXISTS `xuesheng`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xuesheng` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `xuehao` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '学号',
  `mima` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密码',
  `xueshengxingming` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '学生姓名',
  `lianxifangshi` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '联系方式',
  `touxiang` longtext COLLATE utf8mb4_unicode_ci COMMENT '头像',
  PRIMARY KEY (`id`),
  UNIQUE KEY `xuehao` (`xuehao`)
) ENGINE=InnoDB AUTO_INCREMENT=1769334332809 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='学生';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xuesheng`
--

LOCK TABLES `xuesheng` WRITE;
/*!40000 ALTER TABLE `xuesheng` DISABLE KEYS */;
INSERT INTO `xuesheng` VALUES (51,'2026-01-25 09:42:44','6','123456','陈雨','13400134006','file/xuesheng_陈雨1.jpg,file/xuesheng_陈雨2.jpg,file/xuesheng_陈雨3.jpg'),(52,'2026-01-25 09:42:44','14','123456','朱琳','13600136014','file/xuesheng_朱琳1.jpg,file/xuesheng_朱琳2.jpg,file/xuesheng_朱琳3.jpg'),(53,'2026-01-25 09:42:44','5','123456','刘阳','13500135005','file/xuesheng_刘阳1.jpg,file/xuesheng_刘阳2.jpg,file/xuesheng_刘阳3.jpg'),(54,'2026-01-25 09:42:44','2','123456','李娜','13900139002','file/xuesheng_李娜1.jpg,file/xuesheng_李娜2.jpg,file/xuesheng_李娜3.jpg'),(55,'2026-01-25 09:42:44','8','123456','吴婷','13200132008','file/xuesheng_吴婷1.jpg,file/xuesheng_吴婷2.jpg,file/xuesheng_吴婷3.jpg'),(56,'2026-01-25 09:42:44','3','123456','王浩','13700137003','file/xuesheng_王浩1.jpg,file/xuesheng_王浩2.jpg,file/xuesheng_王浩3.jpg'),(57,'2026-01-25 09:42:44','23','123456','彭伟','13700137023','file/xuesheng_彭伟1.jpg,file/xuesheng_彭伟2.jpg,file/xuesheng_彭伟3.jpg'),(58,'2026-01-25 09:42:44','18','123456','田甜','13200132018','file/xuesheng_田甜1.jpg,file/xuesheng_田甜2.jpg,file/xuesheng_田甜3.jpg'),(59,'2026-01-25 09:42:44','9','123456','郑凯','13100131009','file/xuesheng_郑凯1.jpg,file/xuesheng_郑凯2.jpg,file/xuesheng_郑凯3.jpg'),(60,'2026-01-25 09:42:44','24','123456','戴琪','13600136024','file/xuesheng_戴琪1.jpg,file/xuesheng_戴琪2.jpg,file/xuesheng_戴琪3.jpg'),(1769334332808,'2026-01-25 09:45:32','11','11','11','15215215215','file/1769334331777.webp');
/*!40000 ALTER TABLE `xuesheng` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-11 22:38:29
