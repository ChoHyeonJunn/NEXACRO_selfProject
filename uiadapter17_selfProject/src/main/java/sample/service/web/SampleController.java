package sample.service.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import sample.service.SampleService;

@Controller
public class SampleController {
	/*********************************************************************
	 * Variables...
	 *********************************************************************/
	private Logger logger = LoggerFactory.getLogger(SampleController.class);

	@Resource(name = "sampleService")
	private SampleService sampleService;

	/*********************************************************************
	 * Requests...
	 *********************************************************************/
	// 조회
	@RequestMapping(value = "/selectSampleList.do")
	public NexacroResult selectSampleList(
			@ParamDataSet(name = "input1", required = false) Map<String, String> ds_search) {
		// log
		System.out.println("\n\nRequest::" + SampleController.class + ".selectSampleList.do\n");
		logger.debug("ds_search >>>" + ds_search);

		// logic
		List<Map<String, Object>> sampleList = null;
		sampleList = sampleService.selectSampleList(ds_search);

		// return
		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", sampleList);
		return result;
	}

	// 저장
	@RequestMapping(value = "/updateSampleList.do")
	public NexacroResult updateSampleList(
			@ParamDataSet(name = "input1", required = false) List<Map<String, Object>> updateSampleList) {
		// log
		System.out.println("\n\nRequest::" + SampleController.class + ".updateSampleList.do\n");

		// logic
		sampleService.updateSampleList(updateSampleList);

		// return
		return new NexacroResult();
	}
}
