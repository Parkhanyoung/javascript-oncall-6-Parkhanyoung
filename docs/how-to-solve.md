### 미션 해결 전략

#### 1. 본인이 이해하고 구현한 내용에 기반해 '다른 근무자와 순서를 바꿔야 하는 경우'를 자신만의 예시를 들어 설명하세요. (필수)

[동일한 근무자가 이틀 연속으로 근무에 배정되는 경우]
평일, 휴일(주말 및 법정 공휴일) 구분 없이 한 근무자가 이틀 연속으로 배정되는 경우 순서를 바꿉니다.
평일 근무자와 휴일 근무자 명단은 별도로 관리됩니다. 따라서 한 근무자가 이틀 연속 근무에 배정되는 경우가 발생할 수 있습니다.
예를 들면, 근무자 'A'가 평일인 금요일에 근무를 했는데 다음 날이 휴일인 토요일이었고, 때마침 'A'의 휴일 근무 차례였다면, 'A'는 이틀 연속 근무를 서게 됩니다.
혹은 반대로 근무자 'A'가 휴일인 일요일에 근무를 했는데 다음 날이 평일인 월요일이었고, 때마침 'A'의 평일 근무 차례였다면, 'A'는 이틀 연속 근무를 서게 됩니다.
이와 같이 이틀 연속 한 근무자가 근무를 서게 되는 경우에는 비상 근무 운영의 효율이 저해됩니다.
그래서 이런 경우에는 'A'의 다음 순번인 근무자와 순번을 교체를 하게 됩니다.

#### 2. 요구사항에서 제시한 앞의 날짜부터 순서를 변경하는 방법 외에 다른 방법이 있다면 어떤 방식이 있는지, 이 방법은 기존에 제시된 방식과 비교해 어떤 차이가 있는지 설명하세요. (선택)

[이틀 연속 근무자가 발생하는 경우, 명단을 재입력 받기]
순번을 입력받을 때, 이틀 연속 근무자가 발생하는지 여부를 계산하여 만약 발생한다면, 순번을 재입력받는 방식입니다.
기존의 방식과 동일하게 일단 근무표를 짠 후, 해당 근무표의 이틀 연속 근무 여부를 파악합니다.
만약 이틀 연속 근무가 발생했다면, 사용자로부터 명단을 재입력받습니다.
이런 방식은 기존 방식과 비교했을 때, 연속 근무 발생 시 사용자가 명단을 여러 번 입력해야 하는 경우가 발생하므로 사용자가 번거로움을 느낄 수 있습니다.
하지만, 근무 배정 결과가 사용자가 제시한 명단의 순번과 일치함을 보장받을 수 있다는 장점이 있습니다.

[평일, 휴일 근무 명단을 하나로 합치기]
이틀 연속 근무가 발생할 여지가 없도록 근무자 순번을 관리하는 명단을 하나로 통일하는 방식입니다.
이틀 연속 근무가 발생했던 이유는 평일 근무자가 휴일인 다음 날에 다시 투입되거나, 휴일 근무자가 평일인 다음 날에 다시 투입되었기 떄문입니다.
즉, 평일 명단과 휴일 명단이 별도로 관리되었기 때문에 이틀 연속 근무가 발생한 것입니다.
따라서 두 명단을 하나로 합쳐서 하나의 명단으로 평일, 휴일 근무 순번을 결정하게 된다면 이틀 연속으로 근무하는 경우가 사라집니다.
이런 방식은 기존 방식과 비교했을 때, 간단하게 이틀 연속 배정을 방지할 수 있다는 장점이 있습니다.
하지만 평일과 휴일 순번을 다르게 관리하고 싶은 케이스를 커버하지 못한다는 단점이 있습니다.
