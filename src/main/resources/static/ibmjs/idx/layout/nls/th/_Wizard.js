define({
//begin v1.x content
		next: "ถัดไป",
		previous: "ก่อนหน้านี้",
		finish: "เสร็จสิ้น",
		cancel: "ยกเลิก",
		save: "บันทึก",
		// for accordion wizard
		leadingOverflowLabel: "${count} เพิ่มเติม",
		trailingOverflowLabel: "${count} เพิ่มเติม",
		a11yLabel: "วิซาร์ดแบบหลายขั้นตอน",
		accordionAnnouncement: "วิซาร์ดแบบหลายขั้นตอน  กด ALT+F12 สำหรับวิธีใช้",
		accordionHelp: "โหมดมาตรฐานของวิซาร์ดแบบหลายขั้นตอน  "
					 + "ใช้ ALT+ENTER หรือ ALT+SPACE เพื่อประกาศขั้นตอนปัจจุบัน  "
					 + "ใช้ ALT+PAGE UP เพื่อตรวจทานขั้นตอนวิซาร์ดก่อนหน้านี้และปัจจุบัน  ใช้ ALT+PAGE DOWN เพื่อตรวจทาน "
					 + "ขั้นตอนวิซาร์ดที่ต่อจากขั้นตอนวิซาร์ดปัจจุบัน  ใช้ ALT + ARROW KEYS เพื่อนำทาง "
					 + "ขั้นตอนวิซาร์ดถัดไปและก่อนหน้านี้  ใช้ ALT+END เพื่อกระโดดโฟกัสไปยัง "
					 + "ปุ่มแอ็คชันวิซาร์ดแรก  ใช้ TAB และปุ่ม SHIFT+TAB เพื่อนำทางโฟกัสไปยังอิลิเมนต์ถัดไปและก่อนหน้านี้",
		leadingReviewHelp: "โหมดตรวจทานส่วนนำหน้าของวิซาร์ดแบบหลายขั้นตอน  "
					+ "ใช้ ALT+ENTER หรือ ALT+SPACE เพื่อประกาศขั้นตอนปัจจุบัน  "
					+ "ใช้ปุ่ม ESCAPE หรือ ALT+PAGE UP เพื่อยกเลิกโหมดตรวจทานส่วนนำหน้า และส่งโฟกัสกลับไปยัง "
					+ "ขั้นตอนวิซาร์ดปัจจุบันในทันที  "
					+ "กด ALT+PAGE DOWN เพื่อยกเลิกโหมดตรวจทานส่วนนำหน้า และสลับไปยังโหมดตรวจทานส่วนตามหลัง  "
					+ "ขณะอยู่ในโหมดตรวจทานส่วนนำหน้า ใช้ปุ่มลูกศรเพื่อวนรอบโฟกัสผ่าน "
					+ "หัวเรื่องของขั้นตอนวิซาร์ดก่อนหน้านี้และปัจจุบัน"
					+ "ใช้ ALT+END เพื่อยกเลิกโหมดตรวจทานส่วนนำหน้า และกระโดดโฟกัสไปยังปุ่มแอ็คชันวิซาร์ดแรก  "
					+ "ใช้ TAB และปุ่ม SHIFT+TAB เพื่อนำทางโฟกัสมาตรฐาน  "
					+ "ถ้าเปลี่ยนโฟกัสออกจากหัวเรื่องขั้นตอนวิซาร์ดส่วนนำหน้า โหมดตรวจทานส่วนนำหน้า "
					+ "จะถูกยกเลิก",
		trailingReviewHelp: "โหมดตรวจทานส่วนตามหลังของวิซาร์ดแบบหลายขั้นตอน  "
					+ "ใช้ ALT+ENTER หรือ ALT+SPACE เพื่อประกาศขั้นตอนปัจจุบัน  "
					+ "ใช้ปุ่ม ESCAPE หรือ ALT+PAGE DOWN เพื่อยกเลิกโหมดตรวจทานส่วนตามหลัง และส่งโฟกัสกลับไปยัง "
					+ "ขั้นตอนวิซาร์ดปัจจุบันในทันที  "
					+ "กด ALT+PAGE UP เพื่อยกเลิกโหมดตรวจทานส่วนตามหลัง และสลับไปยังโหมดตรวจทานส่วนนำหน้า  "
					+ "ขณะอยู่ในโหมดตรวจทานส่วนตามหลัง ใช้ปุ่มลูกศรเพื่อวนรอบโฟกัสผ่าน "
					+ "หัวเรื่องของขั้นตอนวิซาร์ดที่ตามหลังขั้นตอนปัจจุบัน  "
					+ "ใช้ ALT+END เพื่อยกเลิกโหมดตรวจทานส่วนตามหลัง และกระโดดโฟกัสไปยังปุ่มแอ็คชันวิซาร์ดแรก  "
					+ "ใช้ TAB และปุ่ม SHIFT+TAB เพื่อนำทางโฟกัสมาตรฐาน  ถ้าเปลี่ยนโฟกัส "
					+ "ออกจากหัวเรื่องขั้นตอนวิซาร์ดส่วนตามหลัง โหมดตรวจทานส่วนตามหลังจะถูกยกเลิก",
		leadingReviewModeAnnouncement: "โหมดตรวจทานส่วนนำหน้าของวิซาร์ดแบบหลายขั้นตอน  กด ALT+F12 สำหรับวิธีใช้ มีขั้นตอนวิซาร์ดหลักส่วนนำหน้ามากถึง ${count} ขั้นตอน "
					+ "ซึ่งรวมถึงขั้นตอนหลักปัจจุบัน",
		trailingReviewModeAnnouncement: "โหมดตรวจทานส่วนตามหลังของวิซาร์ดแบบหลายขั้นตอน  กด ALT+F12 สำหรับวิธีใช้ มีขั้นตอนวิซาร์ดหลักส่วนตามหลังอยู่ ${count} ขั้นตอน "
					+ "ที่ตามหลังขั้นตอนหลักปัจจุบัน",
		leadingReviewModeWithSubstepsAnnouncement: "โหมดตรวจทานส่วนนำหน้าของวิซาร์ดแบบหลายขั้นตอน  กด ALT+F12 สำหรับวิธีใช้ มีขั้นตอนวิซาร์ดหลักส่วนนำหน้ามากถึง ${mainCount} "
					+ "ขั้นตอน ซึ่งรวมถึงขั้นตอนหลักปัจจุบัน ขั้นตอนหลักปัจจุบันมีขั้นตอนย่อยที่นำหน้ามากถึง ${count} ขั้นตอน "
					+ "ซึ่งรวมถึงขั้นตอนปัจจุบัน",
		trailingReviewModeWithSubstepsAnnouncement: "โหมดตรวจทานส่วนตามหลังของวิซาร์ดแบบหลายขั้นตอน  กด ALT+F12 สำหรับวิธีใช้ มีขั้นตอนวิซาร์ดหลักส่วนตามหลังอยู่ ${mainCount} "
					+ "ขั้นตอน ที่ตามหลังขั้นตอนหลักปัจจุบัน  ขั้นตอนหลักปัจจุบันมีขั้นตอนย่อยที่ตามหลังขั้นตอนปัจจุบันอยู่ ${count} "
					+ "ขั้นตอน",
		trailingReviewOnLastError: "ตอนนี้ คุณอยู่ที่ขั้นตอนสุดท้ายของวิซาร์ด  โหมดตรวจทานส่วนตามหลังจึงไม่พร้อมใช้งาน",
		nextOnInvalidError: "คุณไม่สามารถนำทางไปยังขั้นตอนถัดไป จนกว่าคุณทำขั้นตอนปัจจุบันเสร็จเรียบร้อยแล้ว",
		nextOnLastError: "คุณไม่สามารถนำทางไปยังขั้นตอนถัดไป เนื่องจากคุณอยู่ในขั้นตอนสุดท้ายที่พร้อมใช้งาน",
		previousOnFirstError: "คุณไม่สามารถนำทางไปยังขั้นตอนก่อนหน้านี้ เนื่องจากคุณอยู่ในขั้นตอนแรกที่พร้อมใช้งาน",
		currentMainStepAnnouncement: "ขั้นตอนหลักปัจจุบันคือ ${index} จากทั้งหมด ${count}, ชื่อว่า ${title}",
		currentSubstepAnnouncement: "ขั้นตอนย่อยปัจจุบันคือ ${index} จากทั้งหมด ${count}, ชื่อว่า ${title}",
		stepChangeAnnouncment: "ขั้นตอนวิซาร์ดเปลี่ยนแปลง",		
		reviewStepAnnouncement: "กำลังตรวจทานขั้นตอนหลัก ${index} จากทั้งหมด ${count}, ชื่อว่า ${title}",
		reviewStepCurrentAnnouncement: "นี่คือขั้นตอนหลักปัจจุบัน",
		reviewStepVisitedAnnouncement: "ขั้นตอนหลักนี้มีการทำเครื่องหมายว่าเสร็จสมบูรณ์แล้ว",
		reviewStepDisabledAnnouncement: "ขั้นตอนหลักนี้ปิดใช้งานในปัจจุบัน",
		reviewStepClickAnnouncement: "กด ENTER หรือ SPACE เพื่อกลับมายังขั้นตอนนี้",
		reviewParentStepClickAnnouncement: "กด ENTER หรือ SPACE เพื่อกลับไปยังจุดเริ่มต้นของขั้นตอนนี้",
		reviewStepUnvisitedAnnouncement: "ขั้นตอนหลักนี้ยังไม่เสร็จสมบูรณ์ในปัจจุบัน",
		reviewStepStartedAnnouncement: "ขั้นตอนหลักนี้มีการเริ่มต้นแล้ว แต่ยังไม่เสร็จสมบูรณ์ทั้งหมด",
		reviewSubstepAnnouncement: "กำลังตรวจทานขั้นตอนย่อย ${index} จากทั้งหมด ${count}, ชื่อว่า ${title} นี่คือขั้นตอนย่อยของขั้นตอนหลัก ${mainIndex} จากทั้งหมด ${mainCount}, ชื่อว่า ${mainTitle}",
		reviewSubstepCurrentAnnouncement: "นี่คือขั้นตอนย่อยปัจจุบัน",
		reviewSubstepVisitedAnnouncement: "ขั้นตอนย่อยนี้มีการทำเครื่องหมายว่าเสร็จสมบูรณ์แล้ว",
		reviewSubstepDisabledAnnouncement: "ขั้นตอนย่อยนี้ปิดใช้งานในปัจจุบัน",

		reviewSubstepClickAnnouncement: "กด ENTER หรือ SPACE เพื่อกลับมายังขั้นตอนย่อยนี้",
		reviewSubstepUnvisitedAnnouncement: "ขั้นตอนย่อยนี้ยังไม่เสร็จสมบูรณ์ในปัจจุบัน"
});

